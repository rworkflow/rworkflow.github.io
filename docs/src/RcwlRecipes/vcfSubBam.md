---
title: vcfSubBam
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## vcfSubBam
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_vcfSubBam.R>
## plot
![## vcfSubBam](/plots/vcfSubBam.svg)
## Inputs
|    |label |type |description  |
|:---|:-----|:----|:------------|
|vcf |      |File |  |
|fai |      |File |  |
|win |      |int  |  |
|bam |      |File |  |
## Outputs
|       |label        |type |description  |
|:------|:------------|:----|:------------|
|outBam |  |File |  |
## steps
|        |label        |doc          |
|:-------|:------------|:------------|
|vcf2bed |  |  |
|subBam  |  |  |
|idxBam  |  |  |
