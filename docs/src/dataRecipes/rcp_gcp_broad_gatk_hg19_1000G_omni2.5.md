---
title: GCP broad gatk b37 1000G omni2.5
description: the 1000G_omni2.5 vcf.gz (and index) files from google bucket for broad reference data GATK hg19.
Author: rworkflow team
Last updated: 2022-11-15
type: article
---
## GCP_broad_gatk_b37_1000G_omni2.5
the 1000G_omni2.5 vcf.gz (and index) files from google bucket for broad reference data GATK hg19.<br>Data source: <https://storage.googleapis.com/gcp-public-data--broad-references/hg38/v0/https://storage.googleapis.com/gcp-public-data--broad-references/hg19/v0/1000G_omni2.5.b37.vcf.gz>
## plot
![## GCP_broad_gatk_b37_1000G_omni2.5](/plots/rcp_gcp_broad_gatk_hg19_1000G_omni2.5.svg)
## Inputs

## Outputs
|    |label |type   |description                                           |
|:---|:-----|:------|:-----------------------------------------------------|
|vcf |vcf   |File[] |The `1000G_omni2.5.b37.vcf.gz` and '.tbi' index files |
## Example:
```
rcp <- recipeLoad('gcp_broad_gatk_hg19_1000G_omni2.5')
getData(rcp, outdir = 'data/folder', prefix = 'gcp_broad_hg19_v0_1000G_omni2.5', notes = c('gcp', 'broad', 'reference', 'hg19', 'v0', '1000G', 'omni2.5', 'b37')
```

