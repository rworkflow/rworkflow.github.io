---
title: STARsolo2sce
description: 
Author: 
Last updated: NA
type: article
---
## STARsolo2sce
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_STARsolo2sce.R>
## plot
![## STARsolo2sce](/plots/STARsolo2sce.svg)
## Inputs
|               |label |type      |description  |
|:--------------|:-----|:---------|:------------|
|fastq_cdna     |      |File[]    |  |
|fastq_cb       |      |File[]    |  |
|genomeDir      |      |Directory |  |
|whiteList      |      |File      |  |
|runThreadN     |      |int       |  |
|soloCellFilter |      |string    |  |
## Outputs
|     |label        |type      |description  |
|:----|:------------|:---------|:------------|
|sam  |  |File      |  |
|Solo |  |Directory |  |
|sce  |  |File      |  |
## steps
|           |label        |doc          |
|:----------|:------------|:------------|
|STARsolo   |  |  |
|counts2sce |  |  |
