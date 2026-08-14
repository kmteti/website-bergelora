import * as LucideIcons from 'lucide-react'
import * as fs from 'fs'
import * as path from 'path'

const keys = Object.keys(LucideIcons)

const iconNames = keys.filter(
  (key) => key !== 'createLucideIcon' && key !== 'Icon' && key !== 'LucideProps' && /^[A-Z]/.test(key)
)

const outputContent = `// Auto-generated file. Do not edit manually.
export const lucideIconOptions = [
${iconNames.map((name) => `  { label: '${name}', value: '${name}' },`).join('\n')}
]
`

const outputPath = path.resolve(process.cwd(), 'src/collections/lucide-icons.ts')

fs.writeFileSync(outputPath, outputContent, 'utf-8')

console.log(`Successfully generated ${iconNames.length} icons to ${outputPath}`)
