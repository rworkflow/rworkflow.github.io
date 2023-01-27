---
title: strelka2PL
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## strelka2PL
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_strelka2PL.R>
## plot
![## strelka2PL](/plots/strelka2PL.svg)
## Inputs
|       |label |type    |description  |
|:------|:-----|:-------|:------------|
|tbam   |      |File    |  |
|nbam   |      |File    |  |
|ref    |      |File    |  |
|region |      |File?   |  |
|exome  |      |boolean |  |
## Outputs
|       |label        |type |description  |
|:------|:------------|:----|:------------|
|snvs   |  |File |  |
|indels |  |File |  |
## steps
|             |label        |doc          |
|:------------|:------------|:------------|
|manta        |  |  |
|strelka      |  |  |
|strelkaSNV   |  |  |
|strelkaIndel |  |  |
