---
title: miRDeep2PL
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## miRDeep2PL
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_miRDeep2PL.R>
## plot
![## miRDeep2PL](/plots/miRDeep2PL.svg)
## Inputs
|           |label |type        |description  |
|:----------|:-----|:-----------|:------------|
|reads      |      |File        |  |
|format     |      |string      |  |
|adapter    |      |string      |  |
|len        |      |int         |  |
|genome     |      |File        |  |
|miRef      |      |File;string |  |
|miOther    |      |File;string |  |
|precursors |      |File;string |  |
|species    |      |string      |  |
## Outputs
|              |label        |type      |description  |
|:-------------|:------------|:---------|:------------|
|csvfiles      |  |File[]    |  |
|htmls         |  |File[]    |  |
|bed           |  |File      |  |
|expression    |  |Directory |  |
|mirna_results |  |Directory |  |
|pdfs          |  |Directory |  |
|preads        |  |File      |  |
|arf           |  |File      |  |
## steps
|         |label        |doc          |
|:--------|:------------|:------------|
|Mapper   |  |  |
|miRDeep2 |  |  |
