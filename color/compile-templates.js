const path = require('path');
const pkg = require('./package.json');

const TemplatedBuilder = require('./builder/templated');
const AseBuilder = require('./builder/ase');
const CraftLibraryBuilder = require('./builder/craft-library');

const COLORS_FILE = path.join(__dirname, 'cr-brand.json');

const colors = require(COLORS_FILE);

const templatedBuilder = new TemplatedBuilder(colors, pkg.version);
const aseBuilder = new AseBuilder(colors, pkg.version);
const craftLibraryBuilder = new CraftLibraryBuilder(colors, pkg.version);

templatedBuilder.build('_config.yml',
    [path.join(__dirname, 'docs', '_config.yml')]);
templatedBuilder.build('cr-brand.scss',
    [path.join(__dirname, 'dist', 'cr-brand.scss'), path.join(__dirname, 'docs', '_sass', '_cr-brand.scss')]);
templatedBuilder.build('cr-brand.css',
    [path.join(__dirname, 'dist', 'cr-brand.css')]);
templatedBuilder.build('cr-brand.less',
    [path.join(__dirname, 'dist', 'cr-brand.less')]);
templatedBuilder.build('cr-brand.styl',
    [path.join(__dirname, 'dist', 'cr-brand.styl')]);
templatedBuilder.build('cr-brand.svg',
    [path.join(__dirname, 'docs', 'asset', 'images', 'cr-brand.svg')]);
templatedBuilder.build('cr-brand.tex',
    [path.join(__dirname, 'dist', 'cr-brand.tex')]);

templatedBuilder.build('cr-brand.sketchpalette',
    [path.join(__dirname, 'docs', 'asset', 'download', `cr-brand_${pkg.version}.sketchpalette`)]);

templatedBuilder.build('cr-brand.inkscape',
    [path.join(__dirname, 'docs', 'asset', 'download', `cr-brand_${pkg.version}.gpl`)]);

aseBuilder.build('ase',
    [path.join(__dirname, 'docs', 'asset', 'download', `cr-brand_${pkg.version}.ase`)]);

craftLibraryBuilder.build(
    [path.join(__dirname, 'docs', 'asset', 'download', `cr-brand_${pkg.version}.library`)]);

templatedBuilder.build('cr-brand.oco',
    [path.join(__dirname, 'dist', 'cr-brand.oco')]);

templatedBuilder.build('cr-brand.rcpx',
    [path.join(__dirname, 'dist', 'cr-brand.rcpx')]);

templatedBuilder.build('cr-brand.d.ts',
    [path.join(__dirname, 'dist', 'cr-brand.d.ts')]);