---
title: reference genome
description: Download (if not previously exist as a local file), rename (as *.fa), and index the reference genome with samtools and bwa
Author: rworkflow team
Last updated: 2022-11-15
type: article
---
## reference genome
Download (if not previously exist as a local file), rename (as *.fa), and index the reference genome with samtools and bwa<br>Data source: <http://ftp.ensembl.org/pub/release-104/fasta/homo_sapiens/dna/>; <http://ftp.1000genomes.ebi.ac.uk/vol1/ftp/technical/reference/GRCh38_rcp>; <http://ftp.ensembl.org/pub/release-104/fasta/mus_musculus/dna/>
## plot
![## reference genome](/plots/rcp_refGenome.svg)
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
rcp <- recipeLoad(reference_genome)
rcp$fasta = 'http://ftp.ensembl.org/pub/release-104/fasta/homo_sapiens/dna/Homo_sapiens.GRCh38.dna.chromosome.MT.fa.gz'
getData(rcp, outdir = 'data/folder', prefix = 'Homo_sapiens.GRCh38.dna.chromosoem.MT', notes = c('homo sapiens', 'grch38', 'ensembl')
```

