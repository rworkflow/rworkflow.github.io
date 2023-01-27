---
title: bowtie2 index
description: Bowtie 2 is an ultrafast and memory-efficient tool for aligning sequencing reads to long reference sequences. `bowtie2-build` is used to build the index files.
Author: rworkflow team
Last updated: 2023-01-05
type: data_rcp
---
## bowtie2_index
Bowtie 2 is an ultrafast and memory-efficient tool for aligning sequencing reads to long reference sequences. `bowtie2-build` is used to build the index files.<br>Recipe source code: <https://github.com/rworkflow/ReUseDataRecipe/blob/master/bowtie2_index.R><br>Data source: <https://bowtie-bio.sourceforge.net/bowtie2/index.shtml>
## plot
![## bowtie2_index](/plots/bowtie2_index.svg)
## Inputs
|       |label            |type |description               |
|:------|:----------------|:----|:-------------------------|
|genome |reference genome |File |The reference genome file |
## Outputs
|      |label         |type   |description                  |
|:-----|:-------------|:------|:----------------------------|
|btIdx |bowtie2 index |File[] |A list of bowtie index files |
## Example:
```
recipeLoad('bowtie2_index.R', return = TRUE)
bowtie2_index$genome <- 'GRCh38.primary_assembly.genome.fa'
getData(bowtie2_index, outdir = 'data/folder', notes = c('bowtie2_index', 'GRCh38.primary_assembly'))
```

