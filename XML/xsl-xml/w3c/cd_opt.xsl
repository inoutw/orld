<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
	<html>
		<body>
			<h2>My CD Collection</h2>
			price more than 10 dollers
			<xsl:apply-templates/>
		</body>
	</html>
</xsl:template>

<xsl:variable name="cds" select="catalog/cd" />

<xsl:template match="cd">
	<xsl:variable name="price" select="price" />
	<xsl:if test="price > 10">
		<p>
			<xsl:apply-templates select="title"/>
			<xsl:apply-templates select="artist"/>
			<xsl:apply-templates select="price"/>
		</p>
	</xsl:if>
</xsl:template>


<xsl:template match="title">
	Title: <span style="color:#ff0000">
	<xsl:value-of select="."/></span>
	<br />
</xsl:template>


<xsl:template match="artist">
	Artist: <span style="color:#00ff00">
	<xsl:value-of select="."/></span>
	<br />
</xsl:template>

<xsl:template match="price">
	Price: <span style="color:#0000ff">
	<xsl:value-of select="."/></span>
	<br />
	##content_blocks##
</xsl:template>

	content_blocks{

	}

</xsl:stylesheet>