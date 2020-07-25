rmdir /s /q ..\Patchs
"BarbarianLand Assets LZMA.exe" ../gamefiles/csv_client ../Patchs/gamefiles/csv_client *.*
"BarbarianLand Assets LZMA.exe" ../gamefiles/csv_logic ../Patchs/gamefiles/csv_logic *.*
"BarbarianLand Assets LZMA.exe" ../gamefiles/locations ../Patchs/gamefiles/locations *.*
md ..\Patchs\gamefiles\sc
copy ..\gamefiles\sc\*.* ..\Patchs\gamefiles\sc
md ..\Patchs\gamefiles\music
copy ..\gamefiles\music\*.* ..\Patchs\gamefiles\music