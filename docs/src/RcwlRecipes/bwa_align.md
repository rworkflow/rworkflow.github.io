---
title: bwa align
description: 
Author: 
Last updated: 2022-07-27
type: article
---
## bwa_align
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_bwa_align.R>
## plot
![## bwa_align](/plots/bwa_align.svg)
## Inputs
|        |label |type   |description  |
|:-------|:-----|:------|:------------|
|threads |      |int    |  |
|RG      |      |string |  |
|Ref     |      |File   |  |
|FQ1     |      |File   |  |
|FQ2     |      |File?  |  |
|outBam  |      |string |  |
## Outputs
|    |label        |type |description  |
|:---|:------------|:----|:------------|
|Bam |  |File |  |
|Idx |  |File |  |
## steps
|        |label        |doc          |
|:-------|:------------|:------------|
|bwa     |  |  |
|sam2bam |  |  |
|sortBam |  |  |
|idxBam  |  |  |
