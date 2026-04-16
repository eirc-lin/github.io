Add-Type -AssemblyName System.Drawing

function Make-Icon($size, $path) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = 'AntiAlias'
    $g.TextRenderingHint = 'AntiAlias'

    # Background gradient (approximate with solid)
    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#fdf6e3'))
    $g.FillRectangle($bgBrush, 0, 0, $size, $size)

    # Red seal rect (inset ~11%)
    $m = [int]($size * 0.11)
    $redBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#9b1b1b'))
    $g.FillRectangle($redBrush, $m, $m, $size-2*$m, $size-2*$m)

    # Gold border inside red
    $goldPen = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#e8c95d'), [int]($size*0.02))
    $bi = $m + [int]($size*0.05)
    $g.DrawRectangle($goldPen, $bi, $bi, $size-2*$bi, $size-2*$bi)

    # Character 诗
    $fontSize = [int]($size * 0.48)
    $font = New-Object System.Drawing.Font('SimSun', $fontSize, [System.Drawing.FontStyle]::Bold)
    $goldBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#e8c95d'))
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = 'Center'
    $sf.LineAlignment = 'Center'
    $rect = New-Object System.Drawing.RectangleF(0, 0, $size, $size)
    $g.DrawString('诗', $font, $goldBrush, $rect, $sf)

    $g.Dispose()
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "Created: $path"
}

$dir = Split-Path $MyInvocation.MyCommand.Path
Make-Icon 192 "$dir\icon-192.png"
Make-Icon 512 "$dir\icon-512.png"
Make-Icon 180 "$dir\apple-touch-icon.png"
Write-Host "Done."

