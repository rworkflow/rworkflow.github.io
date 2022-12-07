---
title: genome liftover
description: Download and unzip genome liftover file from Ensembl
Author: rworkflow team
Last updated: 2022-11-15
type: article
---
## genome liftover
Download and unzip genome liftover file from Ensembl<br>Data source: <https://ftp.ensembl.org/pub/assembly_mapping/>
## plot
![## genome liftover](/plots/rcp_ensemblLiftover.svg)
## Inputs
|        |label   |type   |description                                                                                    |
|:-------|:-------|:------|:----------------------------------------------------------------------------------------------|
|species |species |string |'human' or 'mouse', which maps to the 'homo_sapiens' or 'mus_musculus' folder under source URL |
|from    |from    |string |original genome build (case sensitive, must match source URL)                                  |
|to      |to      |string |target genome build (case sensitive, must match source URL)                                    |
## Outputs
|         |label    |type   |description                                          |
|:--------|:--------|:------|:----------------------------------------------------|
|liftover |liftover |File[] |the unzipped liftover file: `${from}_to_${to}.chain` |
## Example:
```
rcp <- recipeLoad('ensembl_liftover')
rcp$species <- 'human'
rcp$from <- 'GRCh37'
rcp$to <- 'GRCh38'
getData(rcp, outdir = 'data/folder', prefix = 'ensemble_grch37_38', notes = c('grch37', 'grch38')
```

