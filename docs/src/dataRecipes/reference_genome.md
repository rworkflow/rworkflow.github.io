---
title: reference genome
description: Download (if not previously exist as a local file), rename (as *.fa), and index the reference genome with samtools and bwa
Author: rworkflow team
Last updated: 2022-12-12
type: article
---
## reference genome
Download (if not previously exist as a local file), rename (as *.fa), and index the reference genome with samtools and bwa<br>Data source: <http://ftp.ensembl.org/pub/release-104/fasta/homo_sapiens/dna/>; <http://ftp.1000genomes.ebi.ac.uk/vol1/ftp/technical/reference/GRCh38_rcp>; <http://ftp.ensembl.org/pub/release-104/fasta/mus_musculus/dna/>
## plot
![## reference genome](/plots/reference_genome.svg)
## Inputs
|      |label            |type        |description                                                                      |
|:-----|:----------------|:-----------|:--------------------------------------------------------------------------------|
|fasta |reference genome |string;File |Can be a file path (if locally available) or a url as indicated in 'Data source' |
## Outputs
|   |label                    |type |description                                 |
|:--|:------------------------|:----|:-------------------------------------------|
|fa |indexed reference genome |File |*.fa, *.fai files, and some secondary files |
## Example:
```
recipeLoad(reference_genome, return=TRUE)
reference_genome$fasta = 'http://ftp.ensembl.org/pub/release-104/fasta/homo_sapiens/dna/Homo_sapiens.GRCh38.dna.chromosome.MT.fa.gz'
getData(reference_genome, outdir = 'data/folder', notes = c('homo sapiens', 'grch38', 'ensembl'), conda = TRUE, docker = FALSE)
```

