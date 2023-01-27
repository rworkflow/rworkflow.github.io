---
title: bwaAlign
description: 
Author: 
Last updated: 2022-02-16
type: article
---
## bwaAlign
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_bwaAlign.R>
## plot
![## bwaAlign](/plots/bwaAlign.svg)
## Inputs
|        |label |type   |description  |
|:-------|:-----|:------|:------------|
|threads |      |int    |  |
|RG      |      |string |  |
|Ref     |      |File   |  |
|FQ1     |      |File   |  |
|FQ2     |      |File?  |  |
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
