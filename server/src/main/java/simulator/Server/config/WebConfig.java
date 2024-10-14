package simulator.Server.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        if (registry == null) {
            System.out.println("ERROR: registry variable in WebConfig.java (addCorsMappings) is null.");
            System.exit(-1);
        }

        registry.addMapping("/api/**")
                .allowedOrigins(ConfigConstants.clientURL)
                .allowedMethods("GET", "POST", "DELETE")
                .allowedHeaders("Content-Type", "Origin", "Accept", "Authorization")
                .allowCredentials(true);
    }
}
