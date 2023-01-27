---
title: SomaticCaller mouse
description: 
Author: 
Last updated: 2022-08-16
type: article
---
## SomaticCaller_mouse
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_SomaticCaller_mouse.R>
## plot
![## SomaticCaller_mouse](/plots/SomaticCaller_mouse.svg)
## Inputs
|         |label |type   |description  |
|:--------|:-----|:------|:------------|
|tbam     |      |File   |  |
|nbam     |      |File   |  |
|Ref      |      |File   |  |
|normal   |      |string |  |
|tumor    |      |string |  |
|dbsnp    |      |File   |  |
|interval |      |File   |  |
|threads  |      |int    |  |
## Outputs
|              |label        |type |description  |
|:-------------|:------------|:----|:------------|
|mutect2out    |  |File |  |
|MuSEout       |  |File |  |
|strelka2snv   |  |File |  |
|strelka2indel |  |File |  |
|VarDictout    |  |File |  |
|combineVcf    |  |File |  |
## steps
|             |label        |doc          |
|:------------|:------------|:------------|
|Mutect2      |  |  |
|MuSE         |  |  |
|bgzip        |  |  |
|tabixIndex   |  |  |
|mantaStrelka |  |  |
|VarDict      |  |  |
|combine      |  |  |
