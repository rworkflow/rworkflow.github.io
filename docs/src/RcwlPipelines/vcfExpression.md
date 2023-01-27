---
title: vcfExpression
description: 
Author: 
Last updated: 2022-06-16
type: article
---
## vcfExpression
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_vcfExpression.R>
## plot
![## vcfExpression](/plots/vcfExpression.svg)
## Inputs
|            |label |type   |description  |
|:-----------|:-----|:------|:------------|
|rnafqs      |      |File[] |  |
|kallistoIdx |      |File   |  |
|threads     |      |int    |  |
|svcf        |      |File   |  |
## Outputs
|       |label        |type |description  |
|:------|:------------|:----|:------------|
|ExpVcf |  |File |  |
## steps
|              |label        |doc          |
|:-------------|:------------|:------------|
|kallistoQuant |  |  |
|cleanExp      |  |  |
|vcfExpAnn     |  |  |
|T2Gene        |  |  |
|vcfgExpAnn    |  |  |
|bgzip         |  |  |
|tabixIndex    |  |  |
