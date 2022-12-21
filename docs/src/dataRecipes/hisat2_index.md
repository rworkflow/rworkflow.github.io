---
title: hisat2_index
description: HISAT2 is a fast and sensitive alignment program for mapping next-generation sequencing reads (both DNA and RNA) to a population of human genomes as well as to a single reference genome. `hisat2-build` is used to build the index files.
Author: rworkflow team
Last updated: 2022-12-21
type: article
---
## hisat2_index
HISAT2 is a fast and sensitive alignment program for mapping next-generation sequencing reads (both DNA and RNA) to a population of human genomes as well as to a single reference genome. `hisat2-build` is used to build the index files.<br>Data source: <http://daehwankimlab.github.io/hisat2/>
## plot
![## hisat2_index](/plots/hisat2_index.svg)
## Inputs
|       |label            |type |description               |
|:------|:----------------|:----|:-------------------------|
|genome |reference genome |File |The reference genome file |
## Outputs
|      |label        |type   |description           |
|:-----|:------------|:------|:---------------------|
|htIdx |hisat2 index |File[] |A list of index files |
## Example:
```
recipeLoad('hisat2_index.R', return = TRUE)
hisat2_index$genome <- 'GRCh38.primary_assembly.genome.fa'
getData(hisat2_index, outdir = 'data/folder', notes = c('hisat2_index', 'GRCh38.primary_assembly')
```

