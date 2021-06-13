export default v => !v || /^#[0-9a-fA-F]{6}$/.test(v) || 'Hexadecimal only (#FFFFFF)'
