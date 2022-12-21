---
title: salmon_index
description: Salmon is a tool for wicked-fast transcript quantification from RNA-seq data. The recipe is to build a salmon index for your transcriptome. The script is prepared according to this instruction (https://combine-lab.github.io/alevin-tutorial/2019/selective-alignment/.)
Author: rworkflow team
Last updated: 2022-12-21
type: article
---
## salmon_index
Salmon is a tool for wicked-fast transcript quantification from RNA-seq data. The recipe is to build a salmon index for your transcriptome. The script is prepared according to this instruction (https://combine-lab.github.io/alevin-tutorial/2019/selective-alignment/.)<br>Data source: <https://salmon.readthedocs.io/en/latest/salmon.html>
## plot
![## salmon_index](/plots/salmon_index.svg)
## Inputs
|           |label            |type |description                                 |
|:----------|:----------------|:----|:-------------------------------------------|
|genome     |reference genome |File |The fasta file for reference genome         |
|transcript |transcripts      |File |The fasta file for transcripts from gencode |
## Outputs
|          |label        |type      |description                               |
|:---------|:------------|:---------|:-----------------------------------------|
|salmonIdx |salmon index |Directory |A directory containing salmon index files |
## Example:
```
recipeLoad('salmon_index.R', return = TRUE)
salmon_index$genome <- 'GRCh38.primary_assembly.genome.fa'
salmon_index$transcript <- 'gencode.v42.transcripts.fa'
getData(salmon_index, outdir = 'data/folder', notes = c('salmon_index', 'GRCh38.primary_assembly', 'gencode.v42')
```

