---
title: RSeQC
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## RSeQC
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_RSeQC.R>
## plot
![## RSeQC](/plots/RSeQC.svg)
## Inputs
|    |label |type |description  |
|:---|:-----|:----|:------------|
|bam |      |File |  |
|gtf |      |File |  |
## Outputs
|             |label        |type |description  |
|:------------|:------------|:----|:------------|
|distribution |  |File |  |
|gCovP        |  |File |  |
|gCovT        |  |File |  |
## steps
|               |label        |doc          |
|:--------------|:------------|:------------|
|gtfToGenePred  |  |  |
|genePredToBed  |  |  |
|r_distribution |  |  |
|gCoverage      |  |  |
