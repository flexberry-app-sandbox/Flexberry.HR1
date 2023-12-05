package HR.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import HR.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Отчет
 */
@Entity(name = "IISHRОтчет")
@Table(schema = "public", name = "Отчет")
public class Otchet {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "Дата_проверки")
    private Date дата_проверки;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TCH_otcheta")
    @Convert("TCH_otcheta")
    @Column(name = "ТЧ_отчета", length = 16, unique = true, nullable = false)
    private UUID _tch_otchetaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TCH_otcheta", insertable = false, updatable = false)
    private TCH_otcheta tch_otcheta;


    public Otchet() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public Date getДата_проверки() {
      return дата_проверки;
    }

    public void setДата_проверки(Date дата_проверки) {
      this.дата_проверки = дата_проверки;
    }


}