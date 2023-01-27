---
title: lancet scatter
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## lancet_scatter
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_lancet_scatter.R>
## plot
![## lancet_scatter](/plots/lancet_scatter.svg)
## Inputs
|        |label |type   |description  |
|:-------|:-----|:------|:------------|
|tbam    |      |File   |  |
|nbam    |      |File   |  |
|ref     |      |File   |  |
|bed     |      |File[] |  |
|threads |      |int    |  |
## Outputs
|     |label        |type |description  |
|:----|:------------|:----|:------------|
|ovcf |  |File |  |
## steps
|           |label        |doc          |
|:----------|:------------|:------------|
|lancet_bed |  |  |
|mergeVcf   |  |  |
