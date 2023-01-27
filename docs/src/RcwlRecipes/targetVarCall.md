---
title: targetVarCall
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## targetVarCall
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_targetVarCall.R>
## plot
![## targetVarCall](/plots/targetVarCall.svg)
## Inputs
|             |label |type   |description  |
|:------------|:-----|:------|:------------|
|Sample       |      |string |  |
|RG           |      |string |  |
|threads      |      |int    |  |
|Ref          |      |File   |  |
|FQ1          |      |File   |  |
|FQ2          |      |File   |  |
|knowSites    |      |array  |  |
|bed          |      |File   |  |
|downsampling |      |int    |  |
## Outputs
|         |label        |type |description  |
|:--------|:------------|:----|:------------|
|BAM      |  |File |  |
|flagstat |  |File |  |
|stats    |  |File |  |
|gVCF     |  |File |  |
|VCF      |  |File |  |
## steps
|                |label        |doc          |
|:---------------|:------------|:------------|
|bwaAlign        |  |  |
|BaseRecal       |  |  |
|bedtolist       |  |  |
|HaplotypeCaller |  |  |
|GenotypeGVCFs   |  |  |
