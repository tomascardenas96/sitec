import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import sharp from 'sharp';

const root = path.resolve('materiales/Imagenes tableros');
const destination = path.resolve('src/assets/images/projects');
const scratch = path.join(os.tmpdir(), 'balca-project-image-audit');
const hash = (buffer) => crypto.createHash('sha256').update(buffer).digest('hex');
async function inventory(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name, 'en'))) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await inventory(full));
    else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) files.push(full);
  }
  return files;
}
const files = await inventory(root);
const records = [];
for (const [index, file] of files.entries()) {
  const buffer = await fs.readFile(file);
  const metadata = await sharp(buffer).metadata();
  records.push({ id: index + 1, source: path.relative(process.cwd(), file).replaceAll('\\', '/'), sha256: hash(buffer), bytes: buffer.length, width: metadata.width, height: metadata.height });
}
await fs.mkdir(scratch, { recursive: true });
if (process.argv.includes('--inspect')) {
  await fs.writeFile(path.join(scratch, 'inventory.json'), JSON.stringify(records, null, 2));
  for (let offset = 0; offset < files.length; offset += 12) {
    const layers = [];
    for (let i = offset; i < Math.min(offset + 12, files.length); i++) {
      const cell = i - offset;
      const thumbnail = await sharp(files[i]).rotate().resize(350, 290, { fit: 'inside', withoutEnlargement: true }).toBuffer();
      layers.push({ input: thumbnail, left: (cell % 3) * 370 + 10, top: Math.floor(cell / 3) * 330 + 30 });
      layers.push({ input: Buffer.from(`<svg width="350" height="25"><text x="8" y="20" font-size="20" fill="white">Photo ${i + 1}</text></svg>`), left: (cell % 3) * 370 + 10, top: Math.floor(cell / 3) * 330 });
    }
    await sharp({ create: { width: 1110, height: 1320, channels: 3, background: '#202020' } }).composite(layers).jpeg({ quality: 90 }).toFile(path.join(scratch, `sheet-${offset / 12 + 1}.jpg`));
  }
  console.log(JSON.stringify({ scratch, records }, null, 2));
  process.exit(0);
}

// Explicit source names keep the selection stable when new photographs are added.
const selection = [
  ['Criadero porcino', 'IMG_20260720_133435260_HDR_AE.jpg', 'swine-facility/interior-overview', 'Landscape overview adds installation context rather than another cabinet close-up.'],
  ['Criadero porcino', 'IMG_20260805_170131749_HDR_AE.jpg', 'swine-facility/central-aisle', 'Centered aisle view complements the wider interior photograph.'],
  ['Tablero acometida T3 para tambo y riego pivot', '1790631510342.png', 'dairy-irrigation-supply-panel/interior', 'Clear, front-facing cabinet interior; stronger than the empty cabinet and low-resolution exterior.'],
  ['Tablero conmutación generador-red eléctrica', 'IMG_20260521_145351011_AE.jpg', 'generator-grid-switching-panel/installation-overview', 'Wide installation context with the enclosure and surrounding equipment; avoids unfinished-stage repeats.'],
  ['Tablero control bomba sumergible 2', 'IMG_20251017_094152348_AE.jpg', 'submersible-pump-control-panel/interior', 'Installed cabinet interior pairs with the front view of the same source-folder project.'],
  ['Tablero control bomba sumergible 2', 'IMG_20251017_094213262_AE.jpg', 'submersible-pump-control-panel/front', 'Front-facing controls provide a complementary exterior view.'],
  ['Tablero distribucion y control tambo la chavense', '1790631439505.png', 'dairy-distribution-control-panel/interior', 'Landscape view shows both door wiring and cabinet interior in one image.'],
  ['Tablero distribucion y control tambo la chavense', '1790631453284.png', 'dairy-distribution-control-panel/front', 'Installed exterior complements the interior without using the small duplicate-angle image.'],
  ['Tableros de control para sala de engorde porcino', 'IMG_20260625_093220053_HDR_AE.jpg', 'swine-finishing-control-panels/assembly-detail', 'Relatively straight assembly-stage view shows panel layout clearly.'],
  ['Tableros de control para sala de engorde porcino', 'IMG_20260708_143825538_HDR_AE.jpg', 'swine-finishing-control-panels/installed-interior', 'Installed close-up offers useful wiring detail distinct from the assembly-stage view.'],
  ['Tableros de control para sala de engorde porcino', 'IMG_20260730_095234043_AE.jpg', 'swine-finishing-control-panels/installation-overview', 'Installed multi-enclosure overview adds scale and complements the detail photographs.'],
];
const selected = [];
const selectedHashes = new Set();
await fs.mkdir(destination, { recursive: true });
for (const [folder, filename, outputName, rationale] of selection) {
  const source = path.join(root, folder, filename);
  const record = records.find((item) => item.source === path.relative(process.cwd(), source).replaceAll('\\', '/'));
  if (!record) throw new Error(`Missing selected source: ${source}`);
  if (selectedHashes.has(record.sha256)) throw new Error(`Duplicate selection: ${source}`);
  selectedHashes.add(record.sha256);
  const output = path.join(destination, `${outputName}.webp`);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await sharp(source).rotate().resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).webp({ quality: 82, effort: 6 }).toFile(output);
  const outputBuffer = await fs.readFile(output);
  const metadata = await sharp(outputBuffer).metadata();
  if (metadata.format !== 'webp' || Math.max(metadata.width, metadata.height) > 1600) throw new Error(`Invalid output: ${output}`);
  selected.push({ source: record.source, originalSha256: record.sha256, originalWidth: record.width, originalHeight: record.height, originalBytes: record.bytes, output: path.relative(process.cwd(), output).replaceAll('\\', '/'), width: metadata.width, height: metadata.height, bytes: outputBuffer.length, rationale });
}
// Check all source files, including those deliberately not selected.
const verified = [];
for (const record of records) {
  if (hash(await fs.readFile(record.source)) !== record.sha256) throw new Error(`Original changed: ${record.source}`);
  verified.push({ source: record.source, sha256: record.sha256 });
}
const originalBytes = selected.reduce((total, item) => total + item.originalBytes, 0);
const outputBytes = selected.reduce((total, item) => total + item.bytes, 0);
const duplicateGroups = [...Map.groupBy(records, (item) => item.sha256).values()].filter((group) => group.length > 1).map((group) => group.map((item) => item.source));
const manifest = {
  scope: 'Curated assets only; no website integration. Folder-derived identifiers are not verified public project titles or technical claims.',
  processing: { format: 'webp', quality: 82, effort: 6, maximumLongEdge: 1600, autoOrient: true, upscale: false, crop: false, metadata: 'Stripped from derived images; originals untouched.' },
  summary: { sourceCount: records.length, uniqueSourceCount: new Set(records.map((item) => item.sha256)).size, selectedCount: selected.length, selectedProjectGroups: new Set(selection.map((item) => item[0])).size, originalBytes, outputBytes, reductionPercent: Number(((1 - outputBytes / originalBytes) * 100).toFixed(2)), originalIntegrity: 'All source SHA-256 hashes match before and after conversion.' },
  selected,
  exactDuplicates: duplicateGroups,
  omittedGroups: [
    { folder: 'Tablero distribucion residencial', reason: 'Single view adds less visual variety than the selected detailed cabinet pairs.' },
    { folder: 'Tablero para bombas sumergibles', reason: 'Overlaps the selected pump-control project; avoids repetitive presentation.' },
    { folder: 'Tambo robot', reason: 'All six images are only 384 by 512 pixels; request original-resolution copies before considering large gallery use.' },
  ],
  originalChecksums: verified,
};
await fs.writeFile(path.join(destination, 'selection-manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(JSON.stringify(manifest.summary, null, 2));
console.table(selected.map(({ output, width, height, bytes }) => ({ output, width, height, bytes })));
