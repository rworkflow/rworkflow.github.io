---
title: mantaStrelka
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## mantaStrelka
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_mantaStrelka.R>
## plot
![## mantaStrelka](/plots/mantaStrelka.svg)
## Inputs
|       |label |type    |description  |
|:------|:-----|:-------|:------------|
|tbam   |      |File    |  |
|nbam   |      |File    |  |
|ref    |      |File    |  |
|region |      |File?   |  |
|exome  |      |boolean |  |
## Outputs
|          |label        |type |description  |
|:---------|:------------|:----|:------------|
|snvs      |  |File |  |
|indels    |  |File |  |
|somaticSV |  |File |  |
|diploidSV |  |File |  |
## steps
|        |label        |doc          |
|:-------|:------------|:------------|
|manta   |  |  |
|strelka |  |  |
