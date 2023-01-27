---
title: rnaseq quant
description: 
Author: 
Last updated: 2022-02-16
type: article
---
## rnaseq_quant
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_rnaseq_quant.R>
## plot
![## rnaseq_quant](/plots/rnaseq_quant.svg)
## Inputs
|              |label |type      |description  |
|:-------------|:-----|:---------|:------------|
|in_fq1        |      |File      |  |
|in_fq2        |      |File      |  |
|in_prefix     |      |string    |  |
|in_genomeDir  |      |Directory |  |
|in_GTFfile    |      |File      |  |
|in_runThreadN |      |int       |  |
|salmon_index  |      |Directory |  |
## Outputs
|             |label        |type      |description  |
|:------------|:------------|:---------|:------------|
|out_BAM      |  |File      |  |
|out_Log      |  |File      |  |
|out_junction |  |File      |  |
|out_stat     |  |File      |  |
|out_count    |  |File      |  |
|out_salmon   |  |Directory |  |
|out_rdist    |  |File      |  |
## steps
|                  |label        |doc          |
|:-----------------|:------------|:------------|
|STAR              |  |  |
|sortBam           |  |  |
|samtools_index    |  |  |
|samtools_flagstat |  |  |
|featureCounts     |  |  |
|gtfToGenePred     |  |  |
|genePredToBed     |  |  |
|r_distribution    |  |  |
|salmon            |  |  |
