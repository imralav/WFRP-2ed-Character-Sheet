import groovy.json.JsonOutput

def srcDir = '../frontend/src'

println "Finding source files..."
def srcFiles = new FileNameFinder().getFileNames(srcDir, "**/*.jsx")
println "Source files: ${srcFiles}"

println "Extracting translation data..."
def formattedMessagePattern = /FormattedMessage id="(.*)" defaultMessage="(.*)"/
def translations = [:]
for (srcFileName in srcFiles) {
    println "Reading file ${srcFileName}"
    def content = new File(srcFileName).text
    def matchResult = (content =~ formattedMessagePattern)
    for (def i = 0; i < matchResult.count; i++) {
        def match = matchResult[i]
        println "Adding ${match[1]}: ${match[2]}"
        translations[match[1]] = match[2]
    }
}

def translationsJson = JsonOutput.prettyPrint(JsonOutput.toJson(translations))
println "Final translations: ${translationsJson}"

