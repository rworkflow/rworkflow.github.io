---
title: gencode transcripts
description: Download, unzip, and index transcripts files from gencode
Author: rworkflow team
Last updated: 2022-12-21
type: article
---
## gencode transcripts
Download, unzip, and index transcripts files from gencode<br>Data source: <http://ftp.ebi.ac.uk/pub/databases/gencode/>
## plot
![## gencode transcripts](/plots/gencode_transcripts.svg)
## Inputs
|        |label   |type   |description                                                                                                                                                   |
|:-------|:-------|:------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|species |species |string |'human' or 'mouse'                                                                                                                                            |
|version |version |string |Character string. Case sensitive. must match available versions for each species under source URL link. e.g., 'M31' (species='mouse'), '42' (species='human') |
## Outputs
|            |label       |type   |description                                                                    |
|:-----------|:-----------|:------|:------------------------------------------------------------------------------|
|transcripts |transcripts |File[] |the samtool indexed annotation files: `*transcripts.fa`, `*transcripts.fa.fai` |
## Example:
```
## Get data from evaluating recipe
recipeLoad('gencode_transcripts', return = TRUE)
gencode_transcripts$species <- 'mouse'
gencode_transcripts$version <- 'M31'
getData(gencode_transcripts, outdir = 'data/folder', notes = c('gencode', 'transcripts', 'mouse', 'M31')

## Get data from Google bucket directly
dataUpdate('data/folder', cloud=TRUE)
dh <- dataSearch(c('gencode', 'transcripts'))
getCloudData(dh[1], outdir = 'data/folder')
```

