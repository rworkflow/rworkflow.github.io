---
title: GAlign
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## GAlign
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_GAlign.R>
## plot
![## GAlign](/plots/GAlign.svg)
## Inputs
|           |label |type   |description  |
|:----------|:-----|:------|:------------|
|fastq1     |      |string |  |
|fastq2     |      |string |  |
|readGroup  |      |string |  |
|sampleName |      |string |  |
|library    |      |string |  |
|platunit   |      |string |  |
|platform   |      |string |  |
|center     |      |string |  |
|tmpl1      |      |File   |  |
|wdl1       |      |File   |  |
|tmpl2      |      |File   |  |
|wdl2       |      |File   |  |
|cromwell   |      |File   |  |
## Outputs
|       |label        |type      |description  |
|:------|:------------|:---------|:------------|
|bamlog |  |File      |  |
|outdir |  |Directory |  |
## steps
|             |label        |doc          |
|:------------|:------------|:------------|
|fqJson       |  |  |
|fq2ubam      |  |  |
|ubam2bamJson |  |  |
|align        |  |  |
|mvOut        |  |  |
