---
title: UCSC database
description: UCSC genome annotation database from UCSC golden path
Author: rworkflow team
Last updated: 2022-12-21
type: article
---
## UCSC database
UCSC genome annotation database from UCSC golden path<br>Data source: <https://hgdownload.soe.ucsc.edu/downloads.html>
## plot
![## UCSC database](/plots/ucsc_database.svg)
## Inputs
|       |label  |type   |description                                                  |
|:------|:------|:------|:------------------------------------------------------------|
|build  |build  |string |genome build version, e.g. 'hg19', 'hg38', 'mm39'            |
|dbname |dbname |string |genome annotation database name, e.g. 'refGene', 'knownGene' |
## Outputs
|         |label    |type   |description                                     |
|:--------|:--------|:------|:-----------------------------------------------|
|database |database |File[] |the unzipped annotation txt file and sql script |
## Example:
```
## Get data from evaluting recipe
recipeLoad('ucsc_database', return = TRUE)
ucsc_database$build <- 'hg38'
ucsc_database$dbname <- 'refGene'
getData(ucsc_database, outdir = 'data/folder', notes = c('ucsc', 'annotation', 'database', 'hg38', 'refGene')
```

