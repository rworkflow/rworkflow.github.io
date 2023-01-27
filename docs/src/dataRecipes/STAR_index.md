---
title: STAR index
description: ultrafast universal RNA-seq and scRNAseq aligner
Author: rworkflow team
Last updated: 2023-01-05
type: data_rcp
---
## STAR_index
ultrafast universal RNA-seq and scRNAseq aligner<br>Recipe source code: <https://github.com/rworkflow/ReUseDataRecipe/blob/master/STAR_index.R><br>Data source: <https://github.com/alexdobin/STAR>
## plot
![## STAR_index](/plots/STAR_index.svg)
## Inputs
|          |label            |type        |description                                                      |
|:---------|:----------------|:-----------|:----------------------------------------------------------------|
|ref       |reference genome |string;File |The reference genome file                                        |
|gtf       |GTF              |string;File |gene annotation file                                             |
|genomeDir |genomeDir        |string      |The directory for index files.                                   |
|threads   |threads          |int         |The number of threads to use                                     |
|sjdb      |sjdbOverhang     |int         |The length of the genomic sequence around the annotated junction |
## Outputs
|    |label      |type      |description                        |
|:---|:----------|:---------|:----------------------------------|
|idx |STAR index |Directory |The directory for STAR index files |
## Example:
```
recipeLoad('STAR_index.R', return = TRUE)
STAR_index$ref <- 'gcpData/reference_genome/GRCh38.primary_assembly.genome.fa'
STAR_index$gtf <- 'gcpData/gencode_annotation/gencode.v42.annotation.gtf'
STAR_index$sjdb <- 100
STAR_index$genomeDir <- 'GRCh38.GENCODE.v42_100'
STAR_index$threads <- 16
getData(STAR_index, outdir = 'gcpData', notes =c('STAR_index', 'GRCh38.primary_assembly', 'gencode.v42', 'star_2.7.9a'))
```

