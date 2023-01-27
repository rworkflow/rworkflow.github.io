---
title: MuSE scatter
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## MuSE_scatter
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_MuSE_scatter.R>
## plot
![## MuSE_scatter](/plots/MuSE_scatter.svg)
## Inputs
|       |label |type   |description  |
|:------|:-----|:------|:------------|
|tbam   |      |File   |  |
|nbam   |      |File   |  |
|region |      |File[] |  |
|dbsnp  |      |File   |  |
|ref    |      |File   |  |
|vcf    |      |string |  |
## Outputs
|     |label        |type |description  |
|:----|:------------|:----|:------------|
|ovcf |  |File |  |
## steps
|         |label        |doc          |
|:--------|:------------|:------------|
|MuSEchr  |  |  |
|mergeVcf |  |  |
|sortVcf  |  |  |
|normVcf  |  |  |
