---
title: rnaseq Sf
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## rnaseq_Sf
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_rnaseq_Sf.R>
## plot
![## rnaseq_Sf](/plots/rnaseq_Sf.svg)
## Inputs
|              |label |type      |description  |
|:-------------|:-----|:---------|:------------|
|in_seqfiles   |      |File[]    |  |
|in_prefix     |      |string    |  |
|in_genomeDir  |      |Directory |  |
|in_GTFfile    |      |File      |  |
|in_runThreadN |      |int       |  |
## Outputs
|                 |label        |type   |description  |
|:----------------|:------------|:------|:------------|
|out_fastqc       |  |File[] |  |
|out_BAM          |  |File   |  |
|out_Log          |  |File   |  |
|out_Count        |  |File   |  |
|out_stat         |  |File   |  |
|out_count        |  |File   |  |
|out_distribution |  |File   |  |
|out_gCovP        |  |File   |  |
|out_gCovT        |  |File   |  |
## steps
|                  |label        |doc          |
|:-----------------|:------------|:------------|
|fastqc            |  |  |
|STAR              |  |  |
|sortBam           |  |  |
|samtools_index    |  |  |
|samtools_flagstat |  |  |
|featureCounts     |  |  |
|gtfToGenePred     |  |  |
|genePredToBed     |  |  |
|r_distribution    |  |  |
|gCoverage         |  |  |
