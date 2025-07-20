# Color replacement script
$cssFile = "c:\Users\Olivier\Desktop\INSIGHTIQ\styles.css"
$content = Get-Content $cssFile -Raw

# Define color mappings (old -> new)
$colorMappings = @{
    '#228B22' = '#1B5E20'
    '#32CD32' = '#2E7D32'
    '#3CB371' = '#388E3C'
    '#90EE90' = '#66BB6A'
    '#2E8B57' = '#2E7D32'
}

# Apply replacements
foreach ($oldColor in $colorMappings.Keys) {
    $newColor = $colorMappings[$oldColor]
    $content = $content -replace [regex]::Escape($oldColor), $newColor
    Write-Host "Replaced $oldColor with $newColor"
}

# Write back to file
$content | Set-Content $cssFile -Encoding UTF8
Write-Host "Color theme updated successfully!"
