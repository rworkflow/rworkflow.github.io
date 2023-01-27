---
title: VarScan2Somatic
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## VarScan2Somatic
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_VarScan2Somatic.R>
## plot
![## VarScan2Somatic](/plots/VarScan2Somatic.svg)
## Inputs
|       |label |type |description  |
|:------|:-----|:----|:------------|
|tbam   |      |File |  |
|nbam   |      |File |  |
|ref    |      |File |  |
|region |      |File |  |
## Outputs
|       |label        |type |description  |
|:------|:------------|:----|:------------|
|sSnp   |  |File |  |
|sIndel |  |File |  |
|sVcf   |  |File |  |
## steps
|               |label        |doc          |
|:--------------|:------------|:------------|
|mpileupT       |  |  |
|mpileupN       |  |  |
|somatic        |  |  |
|processSomatic |  |  |
|somaticFilter  |  |  |
