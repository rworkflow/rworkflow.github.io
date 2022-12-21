---
title: gencode genome
description: Download human genome GRCh38 from GENCODE release 42
Author: rworkflow team
Last updated: 2022-12-21
type: article
---
## gencode genome
Download human genome GRCh38 from GENCODE release 42<br>Data source: <https://ftp.ebi.ac.uk/pub/databases/gencode/Gencode_human/release_42/GRCh38.primary_assembly.genome.fa.gz>
## plot
![## gencode genome](/plots/gencode_genome_grch38.svg)
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

