---
title: vcfCoverage
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## vcfCoverage
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_vcfCoverage.R>
## plot
![## vcfCoverage](/plots/vcfCoverage.svg)
## Inputs
|       |label |type   |description  |
|:------|:-----|:------|:------------|
|vcf    |      |File   |  |
|sample |      |string |  |
|bam    |      |File   |  |
|ntype  |      |string |  |
|ref    |      |File   |  |
## Outputs
|       |label        |type |description  |
|:------|:------------|:----|:------------|
|outvcf |  |File |  |
## steps
|                          |label        |doc          |
|:-------------------------|:------------|:------------|
|decompose                 |  |  |
|readcount                 |  |  |
|readcount_annotator_snv   |  |  |
|readcount_annotator_indel |  |  |
