---
title: jdCall
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## jdCall
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_jdCall.R>
## plot
![## jdCall](/plots/jdCall.svg)
## Inputs
|                   |label |type   |description  |
|:------------------|:-----|:------|:------------|
|sampleName         |      |string |  |
|gvcf               |      |string |  |
|callsetName        |      |string |  |
|intervals          |      |string |  |
|unpadded_intervals |      |string |  |
|tmpl               |      |File   |  |
|cromwell           |      |File   |  |
|wdl                |      |File   |  |
## Outputs
|       |label        |type      |description  |
|:------|:------------|:---------|:------------|
|hclog  |  |File      |  |
|outdir |  |Directory |  |
## steps
|       |label        |doc          |
|:------|:------------|:------------|
|jdJson |  |  |
|JD     |  |  |
|mvOut  |  |  |
