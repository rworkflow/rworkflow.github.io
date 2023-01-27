---
title: hapCall
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## hapCall
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_hapCall.R>
## plot
![## hapCall](/plots/hapCall.svg)
## Inputs
|          |label |type   |description  |
|:---------|:-----|:------|:------------|
|bam       |      |string |  |
|intervals |      |string |  |
|cromwell  |      |File   |  |
|wdl       |      |File   |  |
|tmpl      |      |File   |  |
## Outputs
|       |label        |type      |description  |
|:------|:------------|:---------|:------------|
|hclog  |  |File      |  |
|outdir |  |Directory |  |
## steps
|        |label        |doc          |
|:-------|:------------|:------------|
|hapJson |  |  |
|HC      |  |  |
|mvOut   |  |  |
