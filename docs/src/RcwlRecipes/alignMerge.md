---
title: alignMerge
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## alignMerge
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_alignMerge.R>
## plot
![## alignMerge](/plots/alignMerge.svg)
## Inputs
|        |label |type     |description  |
|:-------|:-----|:--------|:------------|
|idBam   |      |string   |  |
|RG      |      |string[] |  |
|threads |      |int      |  |
|Ref     |      |File     |  |
|FQ1s    |      |File[]   |  |
|FQ2s    |      |File[]   |  |
## Outputs
|       |label        |type |description  |
|:------|:------------|:----|:------------|
|oBam   |  |File |  |
|matrix |  |File |  |
|Idx    |  |File |  |
|stat   |  |File |  |
## steps
|            |label        |doc          |
|:-----------|:------------|:------------|
|bwaAlign    |  |  |
|mergeBamDup |  |  |
