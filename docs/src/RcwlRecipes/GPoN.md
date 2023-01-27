---
title: GPoN
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## GPoN
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_GPoN.R>
## plot
![## GPoN](/plots/GPoN.svg)
## Inputs
|          |label |type   |description  |
|:---------|:-----|:------|:------------|
|nvcf      |      |array  |  |
|Ref       |      |File   |  |
|interval  |      |File   |  |
|pvcf      |      |string |  |
|gresource |      |File?  |  |
## Outputs
|     |label        |type |description  |
|:----|:------------|:----|:------------|
|Pvcf |  |File |  |
## steps
|           |label        |doc          |
|:----------|:------------|:------------|
|GenomicsDB |  |  |
|PoN        |  |  |
