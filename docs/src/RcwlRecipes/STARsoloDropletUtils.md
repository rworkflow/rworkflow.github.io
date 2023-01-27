---
title: STARsoloDropletUtils
description: 
Author: 
Last updated: 2022-07-27
type: article
---
## STARsoloDropletUtils
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_STARsoloDropletUtils.R>
## plot
![## STARsoloDropletUtils](/plots/STARsoloDropletUtils.svg)
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
|      |label        |type      |description  |
|:-----|:------------|:---------|:------------|
|sam   |  |File      |  |
|Solo  |  |Directory |  |
|sce   |  |File      |  |
|plots |  |File      |  |
## steps
|             |label        |doc          |
|:------------|:------------|:------------|
|STARsolo     |  |  |
|DropletUtils |  |  |
