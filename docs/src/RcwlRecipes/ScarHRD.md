---
title: ScarHRD
description: 
Author: 
Last updated: 2022-06-16
type: article
---
## ScarHRD
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_ScarHRD.R>
## plot
![## ScarHRD](/plots/ScarHRD.svg)
## Inputs
|       |label |type   |description  |
|:------|:-----|:------|:------------|
|normal |      |File   |  |
|tumor  |      |File   |  |
|ref    |      |File   |  |
|gc     |      |File   |  |
|out    |      |string |  |
|window |      |int    |  |
|build  |      |string |  |
## Outputs
|      |label        |type |description  |
|:-----|:------------|:----|:------------|
|segs  |  |File |  |
|score |  |File |  |
## steps
|             |label        |doc          |
|:------------|:------------|:------------|
|bam2seqz     |  |  |
|seqz_binning |  |  |
|hrd          |  |  |
