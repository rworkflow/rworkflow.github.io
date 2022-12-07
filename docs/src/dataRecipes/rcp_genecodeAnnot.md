---
title: gencode annotation
description: Download and unzip annotation files from gencode
Author: rworkflow team
Last updated: 2022-11-15
type: article
---
## gencode annotation
Download and unzip annotation files from gencode<br>Data source: <http://ftp.ebi.ac.uk/pub/databases/gencode/>
## plot
![## gencode annotation](/plots/rcp_genecodeAnnot.svg)
## Inputs
|        |label   |type   |description                                                                                                                                                   |
|:-------|:-------|:------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|species |species |string |'human' or 'mouse'                                                                                                                                            |
|version |version |string |Character string. Case sensitive. must match available versions for each species under source URL link. e.g., 'M31' (species='mouse'), '42' (species='human') |
## Outputs
|           |label      |type   |description                                                      |
|:----------|:----------|:------|:----------------------------------------------------------------|
|annotation |annotation |File[] |the unzipped annotation file: `gencode.v$version.annotation.gtf` |
## Example:
```
rcp <- recipeLoad('gencode_annotation')
rcp$species <- 'human'
rcp$version <- '42'
getData(rcp, outdir = 'data/folder', prefix = 'gencode_annotation_human_42', notes = c('gencode', 'annotation', 'human', '42')
```

