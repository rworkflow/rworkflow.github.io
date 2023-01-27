---
title: gencode genome grch38
description: Download human genome GRCh38 from GENCODE release 42
Author: rworkflow team
Last updated: 2023-01-05
type: data_rcp
---
## gencode_genome_grch38
Download human genome GRCh38 from GENCODE release 42<br>Recipe source code: <https://github.com/rworkflow/ReUseDataRecipe/blob/master/gencode_genome_grch38.R><br>Data source: <https://ftp.ebi.ac.uk/pub/databases/gencode/Gencode_human/release_42/GRCh38.primary_assembly.genome.fa.gz>
## plot
![## gencode_genome_grch38](/plots/gencode_genome_grch38.svg)
## Inputs

## Outputs
|       |label  |type   |description                                           |
|:------|:------|:------|:-----------------------------------------------------|
|genome |genome |File[] |The `GRCh38.primary_assembly.genome.fa.gz` fasta file |
## Example:
```
Get data from evaluting recipe
recipeLoad('gencode_genome_grch38', return = TRUE)
getData(gencode_genome_grch38, outdir = 'data/folder', notes = c('gencode', 'genome', 'grch38', 'release 42'))

## Get data from Google bucket directly
dataUpdate('data/folder', cloud = TRUE)
dh <- dataSearch(c('gencode', 'genome', 'grch38'))
getCloudData(dh[dataNames(dh) == 'GRCh38.primary_assembly.genome.fa.gz'], outdir = 'data/folder')
```

