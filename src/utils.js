function kebabCaseToCamelCase(name) {
    name = name.replace(/(\-\w)/g, function(m) { return m[1].toUpperCase(); });
    return name.charAt(0).toUpperCase() + name.slice(1)
}
