---
title: mergeBamDup
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## mergeBamDup
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_mergeBamDup.R>
## plot
![## mergeBamDup](/plots/mergeBamDup.svg)
## Inputs
|     |label |type   |description  |
|:----|:-----|:------|:------------|
|ibam |      |File[] |  |
|obam |      |string |  |
## Outputs
|       |label        |type |description  |
|:------|:------------|:----|:------------|
|oBam   |  |File |  |
|matrix |  |File |  |
|Idx    |  |File |  |
|stat   |  |File |  |
## steps
|                  |label        |doc          |
|:-----------------|:------------|:------------|
|mergeBam          |  |  |
|markdup           |  |  |
|samtools_index    |  |  |
|samtools_flagstat |  |  |
