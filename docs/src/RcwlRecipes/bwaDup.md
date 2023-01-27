---
title: bwaDup
description: 
Author: 
Last updated: 2022-07-27
type: article
---
## bwaDup
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_bwaDup.R>
## plot
![## bwaDup](/plots/bwaDup.svg)
## Inputs
|        |label |type     |description  |
|:-------|:-----|:--------|:------------|
|outBam  |      |string   |  |
|RG      |      |string[] |  |
|threads |      |int      |  |
|Ref     |      |File     |  |
|FQ1s    |      |File[]   |  |
|FQ2s    |      |File[]?  |  |
## Outputs
|         |label        |type |description  |
|:--------|:------------|:----|:------------|
|BAM      |  |File |  |
|matrix   |  |File |  |
|flagstat |  |File |  |
|stats    |  |File |  |
|md5s     |  |File |  |
## steps
|                  |label        |doc          |
|:-----------------|:------------|:------------|
|bwaAlign          |  |  |
|mergeBam          |  |  |
|markdup           |  |  |
|samtools_index    |  |  |
|samtools_flagstat |  |  |
|samtools_stats    |  |  |
|md5sum            |  |  |
