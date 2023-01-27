---
title: CombineGenotypeGVCFs
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## CombineGenotypeGVCFs
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_CombineGenotypeGVCFs.R>
## plot
![## CombineGenotypeGVCFs](/plots/CombineGenotypeGVCFs.svg)
## Inputs
|     |label |type   |description  |
|:----|:-----|:------|:------------|
|vcfs |      |array  |  |
|Ref  |      |File   |  |
|out  |      |string |  |
## Outputs
|    |label        |type |description  |
|:---|:------------|:----|:------------|
|VCF |  |File |  |
## steps
|              |label        |doc          |
|:-------------|:------------|:------------|
|CombineGVCFs  |  |  |
|GenotypeGVCFs |  |  |
